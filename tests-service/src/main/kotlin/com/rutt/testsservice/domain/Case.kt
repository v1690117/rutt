package com.rutt.testsservice.domain

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
    var suites: List<Suite> = arrayListOf(),

    @Id
    @Column(name = "case_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null
)