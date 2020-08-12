package com.v1690117.rutt.services;

import com.v1690117.rutt.dtos.TaskDTO;
import com.v1690117.rutt.model.Task;
import com.v1690117.rutt.repositories.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DefaultTaskService implements TaskService {
    private final TaskRepository repository;

    @Override
    public List<TaskDTO> findAll() {
        return repository.findAll().stream()
                .map(TaskDTO::fromTask)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public TaskDTO findById(long id) {
        // todo get relations
        return TaskDTO.fromTaskFull(repository.findById(id).get());
    }

    @Override
    public TaskDTO insert(TaskDTO taskDTO) {
        return TaskDTO.fromTask(
                repository.save(
                        new Task(
                                null,
                                taskDTO.getTitle(),
                                taskDTO.getDescription(),
                                Collections.emptyList()
                        )
                )
        );
    }

    @Override
    public TaskDTO update(TaskDTO taskDTO) {
        return TaskDTO.fromTask(
                repository.save(
                        new Task(
                                null,
                                taskDTO.getTitle(),
                                taskDTO.getDescription(),
                                Collections.emptyList()
                        )
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
