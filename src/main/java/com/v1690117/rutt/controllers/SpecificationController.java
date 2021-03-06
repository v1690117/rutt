package com.v1690117.rutt.controllers;

import com.v1690117.rutt.dtos.SpecificationDTO;
import com.v1690117.rutt.services.SpecificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class SpecificationController {
    private final SpecificationService service; // todo change by service

    @GetMapping(value = "/api/specifications")
    public List<SpecificationDTO> getAll() {
        return service.findAll();
    }

    @GetMapping(value = "/api/specifications/{id}")
    public SpecificationDTO getById(@PathVariable("id") long id) {
        return service.findById(id);
    }

    @PostMapping(value = "/api/specifications")
    public SpecificationDTO create(@RequestBody SpecificationDTO specificationDTO) {
        return service.insert(specificationDTO);
    }
}
