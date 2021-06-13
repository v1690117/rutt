package com.v1690117.rutt.services;

import com.v1690117.rutt.dtos.BPStepDTO;

import java.util.List;

public interface BusinessStepService {
    List<BPStepDTO> findAll();

    BPStepDTO findById(long id);

    BPStepDTO insert(BPStepDTO step);

    BPStepDTO update(BPStepDTO step);

    void delete(long id);
}
