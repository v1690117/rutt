package com.v1690117.rutt.dtos;

import com.v1690117.rutt.model.Task;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
public class TaskDTO {
    private Long id;
    private String title;
    private String description;
    private List<RequirementDTO> requirements;

    public static TaskDTO fromTask(Task task) {
        TaskDTO dto = new TaskDTO();
        dto.id = task.getId();
        dto.title = task.getTitle();
        dto.description = task.getDescription();
        return dto;
    }

    public static TaskDTO fromTaskFull(Task task) {
        TaskDTO dto = new TaskDTO();
        dto.id = task.getId();
        dto.title = task.getTitle();
        dto.description = task.getDescription();
        dto.requirements = task.getRequirements().stream()
                .map(RequirementDTO::fromRequirement)
                .collect(Collectors.toList());
        return dto;
    }
}
