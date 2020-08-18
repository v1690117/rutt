package com.v1690117.rutt.services;

import com.v1690117.rutt.dtos.RequirementDTO;
import com.v1690117.rutt.model.Requirement;
import com.v1690117.rutt.model.Task;
import com.v1690117.rutt.repositories.RequirementRepository;
import com.v1690117.rutt.repositories.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DefaultRequirementService implements RequirementService {
    private final RequirementRepository requirementRepository;
    private final TaskRepository taskRepository;

    @Override
    public List<RequirementDTO> findAll() {
        return requirementRepository.findAll().stream()
                .map(RequirementDTO::fromRequirement)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public RequirementDTO findById(long id) {
        Requirement requirement = requirementRepository.findById(id).get();
        return RequirementDTO.fromRequirementFull(requirement).withChildren(
                requirementRepository.findRequirementsBySpecificationId(
                        requirement.getSpecification().getId()
                )
        );
    }

    @Override
    public RequirementDTO insert(RequirementDTO requirement) {
        return RequirementDTO.fromRequirement(
                requirementRepository.save(
                        new Requirement(
                                null,
                                requirement.getSpecification().toSpecification(), // todo
                                requirement.getText(),
                                Collections.emptyList(),
                                requirement.getParentId()
                        )
                )
        );
    }

    @Override
    public RequirementDTO update(RequirementDTO requirement) {
        return RequirementDTO.fromRequirement(
                requirementRepository.save(
                        new Requirement(
                                requirement.getId(),
                                null, // todo
                                requirement.getText(),
                                Collections.emptyList(),
                                requirement.getParentId()
                        )
                )
        );
    }

    @Override
    public void delete(long id) {
        requirementRepository.delete(
                requirementRepository.findById(id).get()
        );
    }

    @Override
    public RequirementDTO addTask(long requirementId, long taskId) {
        Requirement requirement = requirementRepository.findById(requirementId).get();
        Task task = taskRepository.findById(taskId).get();
        requirement.getTasks().add(task);
        requirementRepository.save(requirement);
        return findById(requirementId);
    }
}
