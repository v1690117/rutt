package com.v1690117.rutt.controllers;

import com.v1690117.rutt.dtos.BPStepDTO;
import com.v1690117.rutt.services.BusinessStepService;
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
public class BusinessStepController {
    private final BusinessStepService service;

    @GetMapping(value = "/api/business-steps")
    public List<BPStepDTO> getAll() {
        return service.findAll();
    }

    @GetMapping(value = "/api/business-steps/{id}")
    public BPStepDTO getById(@PathVariable("id") long id) {
        return service.findById(id);
    }

    @PostMapping(value = "/api/business-steps")
    public BPStepDTO create(@RequestBody BPStepDTO step) {
        return service.insert(step);
    }

    @DeleteMapping(value = "/api/business-steps/{id}")
    public void delete(@PathVariable("id") long id) {
        service.delete(id);
    }
}
