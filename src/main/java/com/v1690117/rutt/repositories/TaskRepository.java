package com.v1690117.rutt.repositories;

import com.v1690117.rutt.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
