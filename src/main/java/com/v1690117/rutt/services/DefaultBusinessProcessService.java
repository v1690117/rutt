package com.v1690117.rutt.services;

import com.v1690117.rutt.dtos.BusinessProcessDTO;
import com.v1690117.rutt.model.BusinessProcess;
import com.v1690117.rutt.repositories.BusinessProcessRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DefaultBusinessProcessService implements BusinessProcessService {
    private final BusinessProcessRepository bpRepository;

    @Override
    public List<BusinessProcessDTO> findAll() {
        return bpRepository.findAll().stream().map(BusinessProcessDTO::fromBusinessProcess).collect(Collectors.toList());
    }

    @Override
    public BusinessProcessDTO findById(long id) {
        return BusinessProcessDTO.fromBusinessProcessFull(bpRepository.findById(id).get());
    }

    @Override
    public BusinessProcessDTO insert(BusinessProcessDTO businessProcess) {
        return BusinessProcessDTO.fromBusinessProcess(
                bpRepository.save(
                        new BusinessProcess(
                                null,
                                businessProcess.getTitle(),
                                businessProcess.getDescription(),
                                Collections.emptyList()
                        )
                )
        );
    }

    @Override
    public BusinessProcessDTO update(BusinessProcessDTO businessProcess) {
        return BusinessProcessDTO.fromBusinessProcess(
                bpRepository.save(
                        new BusinessProcess(
                                businessProcess.getId(),
                                businessProcess.getTitle(),
                                businessProcess.getDescription(),
                                Collections.emptyList()
                        )
                )
        );
    }

    @Override
    public void delete(long id) {
        bpRepository.delete(
                bpRepository.findById(id).get()
        );
    }
}
