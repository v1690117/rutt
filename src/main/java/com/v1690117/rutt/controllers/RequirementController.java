package com.v1690117.rutt.controllers;

import com.v1690117.rutt.dtos.RequirementDTO;
import com.v1690117.rutt.services.RequirementService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class RequirementController {
    private final RequirementService service; // todo change by service

    @GetMapping(value = "/requirements")
    public List<RequirementDTO> getAll() {
        return service.findAll();
    }

    @GetMapping(value = "/requirements/{id}")
    public RequirementDTO getById(@PathVariable("id") long id) {
        return service.findById(id);
    }
}
