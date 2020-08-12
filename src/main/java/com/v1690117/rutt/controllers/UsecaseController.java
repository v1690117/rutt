package com.v1690117.rutt.controllers;

import com.v1690117.rutt.model.Usecase;
import com.v1690117.rutt.repositories.UsecaseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class UsecaseController {
    private final UsecaseRepository repository; // todo change by service

    @GetMapping(value = "/usecases")
    public List<Usecase> getAll() {
        return repository.findAll();
    }

    @GetMapping(value = "/usecases/{id}")
    public Usecase getById(@PathVariable("id") long id) {
        return repository.findById(id).get();
    }
}
