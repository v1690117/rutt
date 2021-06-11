package com.v1690117.rutt.controllers;

import com.v1690117.rutt.dtos.BusinessProcessDTO;
import com.v1690117.rutt.services.BusinessProcessService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class BusinessProcessController {
    private final BusinessProcessService service;

    @GetMapping(value = "/api/business-processes")
    public List<BusinessProcessDTO> getAll() {
        return service.findAll();
    }

    @GetMapping(value = "/api/business-processes/{id}")
    public BusinessProcessDTO getById(@PathVariable("id") long id) {
        return service.findById(id);
    }

    @PostMapping(value = "/api/business-processes")
    public BusinessProcessDTO create(@RequestBody BusinessProcessDTO businessProcess) {
        return service.insert(businessProcess);
    }
}
