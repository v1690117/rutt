package com.rutt.testsservice.repository

import com.rutt.testsservice.domain.Case
import org.springframework.data.repository.CrudRepository

interface CaseRepository : CrudRepository<Case, Long>
