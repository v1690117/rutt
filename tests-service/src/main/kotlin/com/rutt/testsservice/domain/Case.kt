package com.rutt.testsservice.domain

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.CascadeType
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.OneToMany
import jakarta.persistence.OrderColumn
import jakarta.persistence.Table


@Entity
@Table(name = "test_case")
class Case(
    @Column(nullable = false)
    var name: String = "",

    @Column
    var description: String ="",

    @OneToMany(cascade = [CascadeType.ALL])
    @JoinColumn(name = "case_id")
    @OrderColumn(name = "index")
    var steps: MutableList<Step> = ArrayList(),

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "suite_id")
    @JsonIgnore(value = true)
    var suite: Suite? = null,

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null
)