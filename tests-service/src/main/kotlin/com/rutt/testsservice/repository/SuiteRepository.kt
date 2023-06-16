package com.rutt.testsservice.repository

import com.rutt.testsservice.domain.Suite
import org.springframework.data.repository.CrudRepository

interface SuiteRepository : CrudRepository<Suite, Long>