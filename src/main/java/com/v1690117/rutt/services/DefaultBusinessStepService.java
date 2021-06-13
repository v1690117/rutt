package com.v1690117.rutt.services;

import com.v1690117.rutt.dtos.BPStepDTO;
import com.v1690117.rutt.repositories.BPStepRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DefaultBusinessStepService implements BusinessStepService {
    private final BPStepRepository repository;

    @Override
    public List<BPStepDTO> findAll() {
        return repository.findAll().stream().map(BPStepDTO::fromStep).collect(Collectors.toList());
    }

    @Override
    public BPStepDTO findById(long id) {
        return BPStepDTO.fromStepFull(repository.findById(id).get());
    }

    @Override
    public BPStepDTO insert(BPStepDTO step) {
        return BPStepDTO.fromStepFull(
                repository.save(
                        step.toStep()
                )
        );
    }

    @Override
    public BPStepDTO update(BPStepDTO step) {
        return BPStepDTO.fromStepFull(
                repository.save(
                        step.toStep()
                )
        );
    }

    @Override
    public void delete(long id) {
        repository.delete(
                repository.findById(id).get()
        );
    }
}
