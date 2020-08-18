package com.v1690117.rutt.services;

import com.v1690117.rutt.dtos.RequirementDTO;

import java.util.List;

public interface RequirementService {
    List<RequirementDTO> findAll();

    RequirementDTO findById(long id);

    RequirementDTO insert(RequirementDTO requirement);

    RequirementDTO update(RequirementDTO requirement);

    void delete(long id);

    RequirementDTO addTask(long requirementId, long taskId);
}

