package com.v1690117.rutt.dtos;

import com.v1690117.rutt.model.BPStep;
import com.v1690117.rutt.model.BusinessProcess;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class BPStepDTO {
    private Long id;
    private BusinessProcessDTO businessProcess;
    private String title;
    private String description;

    public static BPStepDTO fromStep(BPStep step) {
        BPStepDTO dto = new BPStepDTO();
        dto.id = step.getId();
        dto.title = step.getTitle();
        dto.description = step.getDescription();
        dto.businessProcess = BusinessProcessDTO.fromBusinessProcess(step.getBusinessProcess());
        return dto;
    }

    public static BPStepDTO fromStepFull(BPStep step) {
        BPStepDTO dto = fromStep(step);
        // todo add relations when necessary
        return dto;
    }

    public BPStep toStep() {
        return new BPStep(
                id,
                new BusinessProcess(businessProcess.getId()),
                title,
                description
        );
    }
}
