package com.rutt.testsservice.domain

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.OneToMany
import jakarta.persistence.Table


@Entity
@Table(name = "test_case")
open class Case {

    @Column(nullable = false)
    open var name: String? = null

    @OneToMany(mappedBy = "case")
    open var steps: MutableList<Step>? = null

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "suite_id")
    open var suite: Suite? = null

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    open val id: Long? = null
}