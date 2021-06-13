package com.v1690117.rutt.services;

import com.v1690117.rutt.dtos.FunctionDTO;

import java.util.List;

public interface FunctionService {
    List<FunctionDTO> findAll();

    FunctionDTO findById(long id);

    FunctionDTO insert(FunctionDTO function);

    FunctionDTO update(FunctionDTO function);

    void delete(long id);
}

