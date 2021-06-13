package com.v1690117.rutt.controllers;

import com.v1690117.rutt.dtos.FunctionDTO;
import com.v1690117.rutt.services.FunctionService;
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
public class FunctionController {
    private final FunctionService service;

    @GetMapping(value = "/api/functions")
    public List<FunctionDTO> getAll() {
        return service.findAll();
    }

    @GetMapping(value = "/api/functions/{id}")
    public FunctionDTO getById(@PathVariable("id") long id) {
        return service.findById(id);
    }

    @PostMapping(value = "/api/functions")
    public FunctionDTO create(@RequestBody FunctionDTO functionalSpecification) {
        return service.insert(functionalSpecification);
    }

    @DeleteMapping(value = "/api/functions/{id}")
    public void delete(@PathVariable("id") long id) {
        service.delete(id);
    }
}
