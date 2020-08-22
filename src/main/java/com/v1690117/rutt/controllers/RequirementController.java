package com.v1690117.rutt.controllers;

import com.v1690117.rutt.dtos.RequirementDTO;
import com.v1690117.rutt.dtos.TaskDTO;
import com.v1690117.rutt.services.RequirementService;
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
public class RequirementController {
    private final RequirementService service;

    @GetMapping(value = "/api/requirements")
    public List<RequirementDTO> getAll() {
        return service.findAll();
    }

    @PostMapping(value = "/api/requirements")
    public RequirementDTO create(@RequestBody RequirementDTO requirementDTO) {
        return service.insert(requirementDTO);
    }

    @GetMapping(value = "/api/requirements/{id}")
    public RequirementDTO getById(@PathVariable("id") long id) {
        return service.findById(id);
    }

    @GetMapping(value = "/api/requirements/{id}/tasks")
    public List<TaskDTO> getRequirementTasks(@PathVariable("id") long id) {
        return service.findById(id).getTasks();
    }

    @PostMapping(value = "/api/requirements/{id}/tasks/{taskId}") // todo pass thru body
    public RequirementDTO addTask(@PathVariable("id") long requirementId, @PathVariable("taskId") long taskId) {
        return service.addTask(requirementId, taskId);
    }

    @GetMapping(value = "/api/requirements/{id}/children")
    public List<RequirementDTO> getRequirementChildren(@PathVariable("id") long id) {
        return service.findById(id).getChildren();
    }

    @DeleteMapping(value = "/api/requirements/{id}")
    public void delete(@PathVariable("id") long id) {
        service.delete(id);
    }
}

