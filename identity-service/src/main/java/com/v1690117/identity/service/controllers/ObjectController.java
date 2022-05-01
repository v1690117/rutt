package com.v1690117.identity.service.controllers;

import com.v1690117.identity.service.dtos.ObjectInfo;
import com.v1690117.identity.service.services.ObjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class ObjectController {
    private final ObjectService service;

    @GetMapping("/api/objects/{id}")
    public ObjectInfo get(@PathVariable(name = "id") String id) {
        return service.get(id).map(ObjectInfo::fromEntity).orElseThrow();
    }

    @PostMapping("/api/objects/{serviceId}")
    public ObjectInfo register(@PathVariable(name = "serviceId") String serviceId) {
        return ObjectInfo.fromEntity(
                service.register(serviceId)
        );
    }
}
