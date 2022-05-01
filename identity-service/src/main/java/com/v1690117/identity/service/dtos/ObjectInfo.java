package com.v1690117.identity.service.dtos;

import com.v1690117.identity.service.entities.RuttObject;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ObjectInfo {
    private String id;
    private String serviceId;

    public ObjectInfo(String serviceId){
        this(null, serviceId);
    }

    public static ObjectInfo fromEntity(RuttObject object) {
        return new ObjectInfo(object.getId(), object.getServiceId());
    }

    public RuttObject toEntity() {
        return new RuttObject(id, serviceId);
    }
}
