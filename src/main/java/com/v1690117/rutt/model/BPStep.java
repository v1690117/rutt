package com.v1690117.rutt.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "bp_steps")
@NoArgsConstructor
@AllArgsConstructor
public class BPStep {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "bp_id")
    private BusinessProcess businessProcess;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    public BPStep(Long id) {
        this.id = id;
    }
}
