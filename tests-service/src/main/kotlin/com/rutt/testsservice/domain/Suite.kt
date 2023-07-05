package com.rutt.testsservice.domain

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import jakarta.persistence.*

@Entity
@Table(name = "test_suite")
class Suite(
    @Column(nullable = false)
    var title: String?,

    @Column
    var description: String?,

    @ManyToMany
    @JoinTable(
        name = "suite_cases",
        joinColumns = [JoinColumn(name = "suite_id", referencedColumnName = "suite_id")],
        inverseJoinColumns = [JoinColumn(name = "case_id", referencedColumnName = "case_id")],
    )
    @JsonIgnoreProperties("suites")
    var cases: List<Case>? = null,

    @Id
    @Column(name = "suite_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null
) {
    override fun toString(): String {
        return "Suite(title=$title, description=$description, cases=$cases, id=$id)"
    }
}