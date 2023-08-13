package com.rutt.testsservice.domain

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*

@Entity
@Table(name = "test_step")
class Step(
    @Column(nullable = false)
    var title: String = "",

    @Column
    var description: String = "",

    /**
     * Used to persist position of this test step in case to DB
     */
    @Column
    @JsonIgnore
    var index: Int = 0,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "case_id")
    @JsonIgnore
    var case: Case? = null,

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null
)
