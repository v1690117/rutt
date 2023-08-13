package com.rutt.testsservice.domain

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import jakarta.persistence.*


@Entity
@Table(name = "test_case")
class Case(
    @Column(nullable = false)
    var title: String?,

    @Column
    var description: String?,

    @OneToMany(cascade = [CascadeType.ALL], orphanRemoval = true)
    @JoinColumn(name = "case_id")
    @OrderColumn(name = "index")
    var steps: List<Step> = arrayListOf(),

    @ManyToMany(mappedBy = "cases")
    @JsonIgnoreProperties("cases")
    var suites: List<Suite> = arrayListOf(),

    @Id
    @Column(name = "case_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null
)