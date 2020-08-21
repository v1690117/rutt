package com.v1690117.rutt.controllers;

import com.v1690117.rutt.dtos.TaskDTO;
import com.v1690117.rutt.services.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class TaskController {
    private final TaskService service; // todo change by service

    @GetMapping(value = "/api/tasks")
    public List<TaskDTO> getAll() {
        return service.findAll();
    }

    @PostMapping(value = "/api/tasks")
    public TaskDTO create(@RequestBody TaskDTO taskDTO) {
        return service.insert(taskDTO);
    }

    @GetMapping(value = "/api/tasks/{id}")
    public TaskDTO getById(@PathVariable("id") long id) {
        return service.findById(id);
    }
}
