package com.v1690117.rutt.services;

import com.v1690117.rutt.dtos.BusinessProcessDTO;

import java.util.List;

public interface BusinessProcessService {
    List<BusinessProcessDTO> findAll();

    BusinessProcessDTO findById(long id);

    BusinessProcessDTO insert(BusinessProcessDTO businessProcess);

    BusinessProcessDTO update(BusinessProcessDTO businessProcess);

    void delete(long id);
}

