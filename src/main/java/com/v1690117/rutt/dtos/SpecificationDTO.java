package com.v1690117.rutt.dtos;

import com.v1690117.rutt.model.Specification;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
public class SpecificationDTO {
    private Long id;
    private String title;
    private List<RequirementDTO> requirements;

    public static SpecificationDTO fromSpecification(Specification specification) {
        SpecificationDTO dto = new SpecificationDTO();
        dto.id = specification.getId();
        dto.title = specification.getTitle();
        return dto;
    }

    public static SpecificationDTO fromRequirementFull(Specification specification) {
        SpecificationDTO dto = fromSpecification(specification);
        Map<Long, RequirementDTO> dict = new HashMap<>();
        List<RequirementDTO> requirements = specification.getRequirements().stream()
                .map(RequirementDTO::fromRequirement)
                .collect(Collectors.toList());
        requirements.forEach(requirementDTO -> dict.put(requirementDTO.getId(), requirementDTO));
        dto.requirements = new LinkedList<>();

        requirements.forEach(requirementDTO -> {
            if (requirementDTO.getParentId() == null) {
                dto.requirements.add(requirementDTO);
            } else {
                dict.get(requirementDTO.getParentId()).getChildren().add(requirementDTO);
            }
        });
        return dto;
    }
}
