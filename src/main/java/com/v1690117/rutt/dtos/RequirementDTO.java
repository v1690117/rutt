package com.v1690117.rutt.dtos;

import com.v1690117.rutt.model.Requirement;
import com.v1690117.rutt.model.Specification;
import com.v1690117.rutt.model.Task;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
public class RequirementDTO {
    private Long id;
    private SpecificationDTO specification;
    private String text;
    private List<TaskDTO> tasks;
    private Long parentId;
    private List<RequirementDTO> children;

    public static RequirementDTO fromRequirement(Requirement requirement) {
        RequirementDTO dto = new RequirementDTO();
        dto.id = requirement.getId();
        dto.text = requirement.getText();
        dto.text = requirement.getText();
        dto.specification = SpecificationDTO.fromSpecification(requirement.getSpecification());
        dto.parentId = requirement.getParentId();
        dto.children = new LinkedList<>();
        return dto;
    }

    public static RequirementDTO fromRequirementFull(Requirement requirement) {
        RequirementDTO dto = fromRequirement(requirement);
        dto.tasks = requirement.getTasks().stream()
                .map(TaskDTO::fromTask)
                .collect(Collectors.toList());
        return dto;
    }

    public RequirementDTO withChildren(List<Requirement> requirements) {
        requirements.forEach(requirement -> {
            if (id.equals(requirement.getParentId())) {
                children.add(
                        fromRequirement(requirement)
                );
            }
        });
        return this;
    }

    public Requirement toRequirement() {
        return new Requirement(
                id,
                new Specification(specification.getId()),
                text,
                tasks.stream().map(t -> new Task(t.getId())).collect(Collectors.toList()),
                parentId
        );
    }
}
