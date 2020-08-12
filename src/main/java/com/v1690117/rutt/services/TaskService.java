package com.v1690117.rutt.services;

import com.v1690117.rutt.dtos.TaskDTO;

import java.util.List;

public interface TaskService {
    List<TaskDTO> findAll();

    TaskDTO findById(long id);

    TaskDTO insert(TaskDTO taskDTO);

    TaskDTO update(TaskDTO taskDTO);

    void delete(long id);
}

