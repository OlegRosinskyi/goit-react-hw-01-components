import styled from "styled-components";

export const ProfileUser = styled.div `display: flex; flex-direction:column; align-items:center; background-color: white;width: 300px;`
export const Description = styled.div`display: flex; flex-direction:column; align-items:center; `
export const Stats = styled.ul`list-style: none; display: flex; justify-content: space-between; font-size: 16px; width: 100%;`
export const StatsSingl = styled.li`display: flex; flex-direction:column; align-items:center; width: 100%;
  background-color: rgb(146, 221, 240); border: 1px solid #545457; border-radius: 3px; padding-right:auto; padding-left:auto; color: rgba(90, 85, 85, 0.624);font-size: 12px;`
export const StatsQuantity =  styled.span`color: black;font-size: 16px; font-weight: bold;`
export const ProfileImg = styled.img`border: 2px solid #545457;width: 150px; border-radius:250px; margin-bottom: 10px;`
export const ProfileName = styled.p`color: black; font-size: 16px; font-weight: bold;`
export const ProfileTeg = styled.p`color: rgba(90, 85, 85, 0.624); font-size: 14px; `
