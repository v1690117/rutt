package com.v1690117.rutt.repositories;

import com.v1690117.rutt.model.Requirement;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RequirementRepository extends JpaRepository<Requirement, Long> {
    List<Requirement> findRequirementsBySpecificationId(Long specificationId);
}
