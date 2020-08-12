package com.v1690117.rutt.dtos;

import com.v1690117.rutt.model.Requirement;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
public class RequirementDTO {
    private Long id;
    private String text;
    private List<TaskDTO> tasks;

    public static RequirementDTO fromRequirement(Requirement requirement) {
        RequirementDTO dto = new RequirementDTO();
        dto.id = requirement.getId();
        dto.text = requirement.getText();
        return dto;
    }

    public static RequirementDTO fromRequirementFull(Requirement requirement) {
        RequirementDTO dto = new RequirementDTO();
        dto.id = requirement.getId();
        dto.text = requirement.getText();
        dto.tasks = requirement.getTasks().stream()
                .map(TaskDTO::fromTask)
                .collect(Collectors.toList());
        return dto;
    }
}
