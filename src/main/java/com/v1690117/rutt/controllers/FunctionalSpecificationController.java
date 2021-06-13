package com.v1690117.rutt.controllers;

import com.v1690117.rutt.dtos.FunctionalSpecificationDTO;
import com.v1690117.rutt.services.FunctionalSpecificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class FunctionalSpecificationController {
    private final FunctionalSpecificationService service;

    @GetMapping(value = "/api/functional-specifications")
    public List<FunctionalSpecificationDTO> getAll() {
        return service.findAll();
    }

    @GetMapping(value = "/api/functional-specifications/{id}")
    public FunctionalSpecificationDTO getById(@PathVariable("id") long id) {
        return service.findById(id);
    }

    @PostMapping(value = "/api/functional-specifications")
    public FunctionalSpecificationDTO create(@RequestBody FunctionalSpecificationDTO functionalSpecification) {
        return service.insert(functionalSpecification);
    }

    @DeleteMapping(value = "/api/functional-specifications/{id}")
    public void delete(@PathVariable("id") long id) {
        service.delete(id);
    }
}
