select worker.first_name, worker.last_name, r.title, s.amount, worker.first_work_day_date
from worker
         join public.role r on r.id = worker.role
         join public.salary s on worker.id = s.worker
order by worker.first_work_day_date;

select balance.date, balance.net_income, bt.name
from balance
         join public.balance_type bt on bt.id = balance.type
order by balance.date;

/*
    Naj Visoka zaplata
*/

select salary.amount, w.first_name, w.last_name
from salary
         join public.worker w on w.id = salary.worker
order by salary.amount desc
limit 1;

/*
    Naj niska zaplata
 */

select salary.amount, w.last_name, w.last_name
from salary
         join public.worker w on w.id = salary.worker
order by salary.amount asc
limit 1;


select cl.date,c.first_name,c.last_name,s.name,s.price
from client_visitation cl
join public.client c on c.id = cl.client
join public.subscription s on s.id = c.sub_type
where date=CURRENT_DATE;


select cl.date,c.first_name,c.last_name,s.name,s.price
from client_visitation cl
         join public.client c on c.id = cl.client
         join public.subscription s on s.id = c.sub_type
where (EXTRACT(MONTH FROM  date))=(EXTRACT(MONTH FROM  CURRENT_DATE));


select count(s.name)
from client_visitation cl
         join public.client c on c.id = cl.client
         join public.subscription s on s.id = c.sub_type
where date=CURRENT_DATE;

select count(s.name)
from client_visitation cl
         join public.client c on c.id = cl.client
         join public.subscription s on s.id = c.sub_type
where (EXTRACT(MONTH FROM  date))=(EXTRACT(MONTH FROM  CURRENT_DATE));
/********/
select c.first_name,c.last_name,s.name,s.price,count(cl.date) as visiations
from client_visitation cl
         join public.client c on c.id = cl.client
         join public.subscription s on s.id = c.sub_type
where (EXTRACT(MONTH FROM  date))=(EXTRACT(MONTH FROM TIMESTAMP  '2023-06-17'))
group by s.price, s.name, c.last_name, c.first_name;

select c.first_name,c.last_name,s.name,s.price,count(cl.date) as visiations
from client_visitation cl
         join public.client c on c.id = cl.client
         join public.subscription s on s.id = c.sub_type
WHERE     (EXTRACT(YEAR FROM  date)) = (EXTRACT(YEAR FROM TIMESTAMP  '2023-06-17'))
group by s.price, s.name, c.last_name, c.first_name;
/*******/
SELECT to_char(current_date, 'MONTH YYYY')