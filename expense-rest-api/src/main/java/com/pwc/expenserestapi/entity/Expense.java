package com.pwc.expenserestapi.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "expenses")
public class Expense {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;
    @NotEmpty
    @Size(min = 2, message = "name atleast 2 character")
    @Column(name = "name" , nullable = false)
    private String name;
    @NotEmpty
    @Column(name = "description" , nullable = false)
    private String description;
    @NotEmpty
    @Column(name = "date" , nullable = false)
    private String date;
    @NotEmpty
    @Column(name = "amount" , nullable = false)
    private String amount;
    @Column(name = "status" , nullable = false)
    private String status;

}
