package com.v1690117.rutt.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.List;

@Data
@Entity
@Table(name = "requirements")
@NoArgsConstructor
@AllArgsConstructor
public class Requirement {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "specification_id")
    private Specification specification;

    @Column(name = "text")
    private String text;

    @ManyToMany(fetch = FetchType.LAZY)
    @Fetch(FetchMode.SUBSELECT)
    @JoinTable(
            name = "requirements_tasks",
            joinColumns = {@JoinColumn(name = "requirement_id")},
            inverseJoinColumns = {@JoinColumn(name = "task_id")}
    )
    private List<Task> tasks;

    @Column(name = "parent_id")
    private Long parentId;
}
