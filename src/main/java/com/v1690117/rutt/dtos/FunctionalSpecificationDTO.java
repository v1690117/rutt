package com.v1690117.rutt.dtos;

import com.v1690117.rutt.model.Function;
import com.v1690117.rutt.model.FunctionalSpecification;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
public class FunctionalSpecificationDTO {
    private Long id;
    private String title;
    private String description;
    private List<FunctionDTO> functions;

    public static FunctionalSpecificationDTO fromFunctionalSpecification(FunctionalSpecification fs) {
        FunctionalSpecificationDTO dto = new FunctionalSpecificationDTO();
        dto.id = fs.getId();
        dto.title = fs.getTitle();
        dto.description = fs.getDescription();
        return dto;
    }

    public static FunctionalSpecificationDTO fromFunctionalSpecificationFull(FunctionalSpecification fs) {
        FunctionalSpecificationDTO dto = fromFunctionalSpecification(fs);
        dto.functions = fs.getFunctions().stream().map(FunctionDTO::fromFunction).collect(Collectors.toList());
        return dto;
    }

    public FunctionalSpecification toFunctionalSpecification() {
        return new FunctionalSpecification(
                id,
                title,
                description,
                functions == null
                        ? Collections.emptyList()
                        : functions.stream()
                        .map(r -> new Function(r.getId()))
                        .collect(Collectors.toList())
        );
    }
}
