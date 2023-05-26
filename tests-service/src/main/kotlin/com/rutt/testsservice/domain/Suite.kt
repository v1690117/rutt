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
class Suite {
    @Column(nullable = false)
    var name: String? = null

    @OneToMany(mappedBy = "suite")
    var cases: MutableList<Case>? = null

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null
}