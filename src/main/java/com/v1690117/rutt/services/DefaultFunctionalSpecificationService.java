package com.v1690117.rutt.services;

import com.v1690117.rutt.dtos.FunctionalSpecificationDTO;
import com.v1690117.rutt.repositories.FunctionalSpecificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DefaultFunctionalSpecificationService implements FunctionalSpecificationService {
    private final FunctionalSpecificationRepository repository;

    @Override
    public List<FunctionalSpecificationDTO> findAll() {
        return repository.findAll().stream()
                .map(FunctionalSpecificationDTO::fromFunctionalSpecification)
                .collect(Collectors.toList());
    }

    @Override
    public FunctionalSpecificationDTO findById(long id) {
        return FunctionalSpecificationDTO.fromFunctionalSpecificationFull(repository.findById(id).get());
    }

    @Override
    public FunctionalSpecificationDTO insert(FunctionalSpecificationDTO functionalSpecification) {
        return FunctionalSpecificationDTO.fromFunctionalSpecificationFull(
                repository.save(
                        functionalSpecification.toFunctionalSpecification()
                )
        );
    }

    @Override
    public FunctionalSpecificationDTO update(FunctionalSpecificationDTO functionalSpecification) {
        return FunctionalSpecificationDTO.fromFunctionalSpecificationFull(
                repository.save(
                        functionalSpecification.toFunctionalSpecification()
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
