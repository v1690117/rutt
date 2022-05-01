package com.v1690117.identity.service.services;

import com.v1690117.identity.service.dtos.ObjectInfo;
import com.v1690117.identity.service.entities.RuttObject;
import com.v1690117.identity.service.repositories.ObjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ObjectService {
    private final ObjectRepository repository;

    public Optional<RuttObject> get(String id) {
        return repository.findById(id);
    }

    public RuttObject register(String serviceId) {
        return repository.save(
                new ObjectInfo(serviceId).toEntity()
        );
    }
}
