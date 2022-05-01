package com.v1690117.identity.service.repositories;

import com.v1690117.identity.service.entities.RuttObject;
import org.springframework.data.repository.CrudRepository;

public interface ObjectRepository extends CrudRepository<RuttObject, String> {
}
