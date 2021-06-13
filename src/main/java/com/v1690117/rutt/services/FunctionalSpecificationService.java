package com.v1690117.rutt.services;

import com.v1690117.rutt.dtos.FunctionalSpecificationDTO;

import java.util.List;

public interface FunctionalSpecificationService {
    List<FunctionalSpecificationDTO> findAll();

    FunctionalSpecificationDTO findById(long id);

    FunctionalSpecificationDTO insert(FunctionalSpecificationDTO functionalSpecification);

    FunctionalSpecificationDTO update(FunctionalSpecificationDTO functionalSpecification);

    void delete(long id);
}

