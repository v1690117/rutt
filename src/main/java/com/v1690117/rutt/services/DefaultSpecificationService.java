package com.v1690117.rutt.services;

import com.v1690117.rutt.dtos.SpecificationDTO;
import com.v1690117.rutt.model.Specification;
import com.v1690117.rutt.repositories.SpecificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DefaultSpecificationService implements SpecificationService {
    private final SpecificationRepository repository;

    @Override
    public List<SpecificationDTO> findAll() {
        return repository.findAll().stream()
                .map(SpecificationDTO::fromSpecification)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public SpecificationDTO findById(long id) {
        // todo get relations
        return SpecificationDTO.fromRequirementFull(repository.findById(id).get());
    }

    @Override
    public SpecificationDTO insert(SpecificationDTO specificationDTO) {
        return SpecificationDTO.fromSpecification(
                repository.save(
                        new Specification(
                                null,
                                specificationDTO.getTitle(),
                                Collections.emptyList()
                        )
                )
        );
    }

    @Override
    public SpecificationDTO update(SpecificationDTO specificationDTO) {
        return SpecificationDTO.fromSpecification(
                repository.save(
                        new Specification(
                                specificationDTO.getId(),
                                specificationDTO.getTitle(),
                                Collections.emptyList()// todo
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
