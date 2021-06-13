package com.v1690117.rutt.dtos;

import com.v1690117.rutt.model.Function;
import com.v1690117.rutt.model.FunctionalSpecification;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class FunctionDTO {
    private Long id;
    private FunctionalSpecificationDTO specification;
    private String title;
    private String description;

    public static FunctionDTO fromFunction(Function function) {
        FunctionDTO dto = new FunctionDTO();
        dto.id = function.getId();
        dto.title = function.getTitle();
        dto.description = function.getDescription();
        dto.specification = FunctionalSpecificationDTO.fromFunctionalSpecification(function.getSpecification());
        return dto;
    }

    public static FunctionDTO fromFunctionFull(Function function) {
        FunctionDTO dto = fromFunction(function);
        // todo add relations when necessary
        return dto;
    }

    public Function toFunction() {
        return new Function(
                id,
                new FunctionalSpecification(specification.getId()),
                title,
                description
        );
    }
}
