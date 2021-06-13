package com.v1690117.rutt.services;

import com.v1690117.rutt.dtos.FunctionDTO;
import com.v1690117.rutt.repositories.FunctionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DefaultFunctionService implements FunctionService {
    private final FunctionRepository repository;

    @Override
    public List<FunctionDTO> findAll() {
        return repository.findAll().stream().map(FunctionDTO::fromFunction).collect(Collectors.toList());
    }

    @Override
    public FunctionDTO findById(long id) {
        return FunctionDTO.fromFunctionFull(repository.findById(id).get());
    }

    @Override
    public FunctionDTO insert(FunctionDTO function) {
        return FunctionDTO.fromFunctionFull(
                repository.save(
                        function.toFunction()
                )
        );
    }

    @Override
    public FunctionDTO update(FunctionDTO function) {
        return FunctionDTO.fromFunctionFull(
                repository.save(
                        function.toFunction()
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
