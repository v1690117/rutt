package com.v1690117.rutt.services;

import com.v1690117.rutt.dtos.SpecificationDTO;

import java.util.List;

public interface SpecificationService {
    List<SpecificationDTO> findAll();

    SpecificationDTO findById(long id);

    SpecificationDTO insert(SpecificationDTO specificationDTO);

    SpecificationDTO update(SpecificationDTO specificationDTO);

    void delete(long id);
}

