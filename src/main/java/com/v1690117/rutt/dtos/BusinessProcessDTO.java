package com.v1690117.rutt.dtos;

import com.v1690117.rutt.model.BPStep;
import com.v1690117.rutt.model.BusinessProcess;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
public class BusinessProcessDTO {
    private Long id;
    private String title;
    private String description;
    private List<BPStepDTO> steps;

    public static BusinessProcessDTO fromBusinessProcess(BusinessProcess bp) {
        BusinessProcessDTO dto = new BusinessProcessDTO();
        dto.id = bp.getId();
        dto.title = bp.getTitle();
        dto.description = bp.getDescription();
        return dto;
    }

    public static BusinessProcessDTO fromBusinessProcessFull(BusinessProcess bp) {
        BusinessProcessDTO dto = fromBusinessProcess(bp);
        dto.steps = bp.getSteps().stream().map(BPStepDTO::fromStep).collect(Collectors.toList());
        return dto;
    }

    public BusinessProcess toBusinessProcess() {
        return new BusinessProcess(
                id,
                title,
                description,
                steps == null
                        ? Collections.emptyList()
                        : steps.stream()
                        .map(r -> new BPStep(r.getId()))
                        .collect(Collectors.toList())
        );
    }
}
