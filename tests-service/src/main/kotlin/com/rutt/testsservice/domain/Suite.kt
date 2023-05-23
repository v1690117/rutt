package com.rutt.testsservice.domain

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.OneToMany
import jakarta.persistence.Table

@Entity
@Table(name = "test_suite")
open class Suite {
    @Column(nullable = false)
    open var name: String? = null

    @OneToMany(mappedBy = "suite")
    open var cases: MutableList<Case>? = null

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    open val id: Long? = null
}