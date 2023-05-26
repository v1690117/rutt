package com.rutt.testsservice.domain

import com.rutt.testsservice.Utils
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
class Case {

    @Column(nullable = false)
    var name: String = ""

    @OneToMany(mappedBy = "case")
    var steps: MutableList<Step> = ArrayList()

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "suite_id")
    var suite: Suite? = null

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null



    fun addStep(step: Step) {
        step.case = this
        step.index = steps.size
        steps.add(step)
    }

    fun moveStep(from: Int, to: Int) {
        val step = steps[from]
        steps.removeAt(from)
        steps.add(to, step)
        Utils.fixIndexes(this)
    }

    fun deleteStepInCase(case: Case, from: Int, to: Int) {
        case.steps.removeAt(from)
        Utils.fixIndexes(case)
    }
}