package com.rutt.testsservice.domain

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.Table

@Entity
@Table(name = "test_step")
open class Step {
    @Column(nullable = false)
    open var name: String? = null

    @Column
    open var description: String? = null

    @Column
    open var index: Int? = null

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "case_id")
    @JsonIgnore
    open var case: Case? = null

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    open val id: Long? = null
}