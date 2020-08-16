package com.v1690117.rutt.services;

import com.v1690117.rutt.dtos.RequirementDTO;
import com.v1690117.rutt.model.Requirement;
import com.v1690117.rutt.repositories.RequirementRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DefaultRequirementService implements RequirementService {
    private final RequirementRepository repository;

    @Override
    public List<RequirementDTO> findAll() {
        return repository.findAll().stream()
                .map(RequirementDTO::fromRequirement)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public RequirementDTO findById(long id) {
        // todo get relations
        return RequirementDTO.fromRequirementFull(repository.findById(id).get());
    }

    @Override
    public RequirementDTO insert(RequirementDTO requirement) {
        return RequirementDTO.fromRequirement(
                repository.save(
                        new Requirement(
                                null,
                                null, // todo
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
                repository.save(
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
        repository.delete(
                repository.findById(id).get()
        );
    }
}
